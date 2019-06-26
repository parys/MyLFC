using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace MyLfc.Application.Tests.Infrastructure.Extensions
{
    public static class ReflectionExtensions
    {
        /// <summary>
        /// Compare two properties for equality
        /// </summary>
        /// <param name="self"></param>
        /// <param name="to"></param>
        /// <returns></returns>
        public static bool AreEquivalent(this MemberInfo self, MemberInfo to)
        {
            return self.DeclaringType == to.DeclaringType && self.Name == to.Name;
        }

        /// <summary>
        /// Compare two objects by property values for equality
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <typeparam name="TU"></typeparam>
        /// <param name="self"></param>
        /// <param name="to"></param>
        /// <param name="ignore"></param>
        /// <returns></returns>
        public static bool ArePublicInstancePropertiesEqual<T, TU>(this T self, TU to, params string[] ignore)
            where T : class where TU : class
        {
            if (self == null && to == null)
            {
                return true;
            };

            if (self == null || to == null)
            {
                return false;
            }

            var ignoreList = new List<string>(ignore);
            var selfType = typeof(T);
            var toType = typeof(TU);

            var selfTypeProperties = selfType.GetTypeProperties(ignoreList);
            var toTypeProperties = toType.GetTypeProperties(ignoreList);

            var propertiesToCompare = selfTypeProperties.Where(x => toTypeProperties.Contains(x)).ToList();

            var unequalProperties = propertiesToCompare
                .Where(pi =>
                {
                    var selfValue = selfType.GetProperty(pi).GetValue(self, null);
                    var toValue = toType.GetProperty(pi).GetValue(to, null);
                    return selfValue != toValue && (selfValue == null || !selfValue.Equals(toValue));
                }).ToList();

            return !unequalProperties.Any();
        }

        /// <summary>
        /// Get property list of type
        /// </summary>
        /// <param name="selfType"></param>
        /// <param name="ignoreList"></param>
        /// <returns></returns>
        public static IEnumerable<string> GetTypeProperties(this IReflect selfType, ICollection<string> ignoreList)
        {
            return selfType.GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(pi => !ignoreList.Contains(pi.Name) && pi.GetUnderlyingType().IsSimpleType() &&
                    pi.GetIndexParameters().Length == 0)
                .Select(pi => pi.Name)
                .ToList();
        }

        /// <summary>
        /// Get property list of type
        /// </summary>
        /// <param name="selfType"></param>
        /// <param name="ignore"></param>
        /// <returns></returns>
        public static IEnumerable<object[]> GetTypePropertiesAsObjects(this IReflect selfType, params string[] ignore)
        {
            return selfType.GetTypeProperties(new List<string>(ignore))
                .Select(property => new object[] { property })
                .ToList();
        }

        /// <summary>
        /// Get instance property value by property name
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="property"></param>
        /// <returns></returns>
        public static object GetPropertyValue(this object instance, string property)
        {
            if (string.IsNullOrEmpty(property))
            {
                throw new ArgumentNullException(nameof(property));
            }

            return instance.GetType().GetProperty(property).GetValue(instance);
        }

        /// <summary>
        /// Determine whether a type is simple (String, Decimal, DateTime, etc) 
        /// or complex (i.e. custom class with public properties and methods).
        /// </summary>
        public static bool IsSimpleType(this Type type)
        {
            return
                type.IsValueType ||
                type.IsPrimitive ||
                new[] { typeof(string), typeof(decimal), typeof(DateTime), typeof(DateTimeOffset), typeof(TimeSpan), typeof(Guid) }.Contains(type) ||
                Convert.GetTypeCode(type) != TypeCode.Object;
        }

        /// <summary>
        /// Get underlying type
        /// </summary>
        /// <param name="member"></param>
        /// <returns></returns>
        public static Type GetUnderlyingType(this MemberInfo member)
        {
            switch (member.MemberType)
            {
                case MemberTypes.Event:
                    return ((EventInfo)member).EventHandlerType;
                case MemberTypes.Field:
                    return ((FieldInfo)member).FieldType;
                case MemberTypes.Method:
                    return ((MethodInfo)member).ReturnType;
                case MemberTypes.Property:
                    return ((PropertyInfo)member).PropertyType;
                default:
                    throw new ArgumentException
                    (
                        "Input MemberInfo must be if type EventInfo, FieldInfo, MethodInfo, or PropertyInfo"
                    );
            }
        }

    }
}
