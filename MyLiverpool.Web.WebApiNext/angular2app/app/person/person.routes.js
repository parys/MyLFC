"use strict";
var player_statistics_component_1 = require("./player-statistics.component");
var person_list_component_1 = require("./person-list.component");
var person_edit_component_1 = require("./person-edit.component");
exports.personRoutes = [
    { path: "player/statistics", component: player_statistics_component_1.PlayerStatisticsComponent, data: { title: "Статистика игроков" } },
    {
        path: "person",
        children: [
            { path: "", component: person_list_component_1.PersonListComponent, data: { title: "Люди" }, },
            { path: ":id/edit", component: person_edit_component_1.PersonEditComponent, data: { title: "Редактирование человека" }, },
        ]
    }
];
//# sourceMappingURL=person.routes.js.map