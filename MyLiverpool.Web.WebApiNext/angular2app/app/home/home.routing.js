"use strict";
var index_1 = require("./index");
exports.homeRoutes = [
    { path: "clubHistory", component: index_1.ClubHistoryComponent, data: { title: "История клуба" } },
    { path: "coachTeam", component: index_1.CoachTeamComponent, data: { title: "Тренерский состав" } },
    { path: "rules", component: index_1.RulesComponent, data: { title: "Правила" } },
    { path: "aboutClub", component: index_1.AboutClubComponent, data: { title: "О клубе" } },
    { path: "squad", component: index_1.SquadComponent, data: { title: "Состав команды" } }
];
//# sourceMappingURL=home.routing.js.map