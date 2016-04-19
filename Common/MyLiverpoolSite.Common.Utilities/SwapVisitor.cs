﻿using System.Linq.Expressions;

namespace MyLiverpoolSite.Common.Utilities
{
    public class SwapVisitor : ExpressionVisitor
    {
        private readonly Expression _from;
        private readonly Expression _to;
        public SwapVisitor(Expression from, Expression to)
        {
            _from = from;
            _to = to;
        }
        public override Expression Visit(Expression node)
        {
            return node == _from ? _to : base.Visit(node);
        }
    }
}
