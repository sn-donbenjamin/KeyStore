module KeyStore {
    export module Business {
        export var DbConnection,
            DbVersion = 1,
            ActiveDataBase: DataBase;
        export class MainLogic {
            constructor(dataBase: DataBase) {
                ActiveDataBase = dataBase
            }

            openDb = function (objMain: Instance, onSuccess: Function, onError: Function) {
                var ObjOpenDb = new OpenDbLogic(objMain, onSuccess, onError);
            }

            public closeDb = function () {
                if (Status.ConStatus == ConnectionStatus.Connected) {
                    DbConnection.close();
                }
            }

            public set = function (tableName: string, value, isReturn, onSuccess: Function, onError: Function) {
                var ObjInsert = new SetLogic(tableName, value, isReturn, onSuccess, onError);
            }

            public remove = function (query: IDelete, onSuccess: Function, onError: Function) {
                var ObjDelete = new RemoveLogic(query, onSuccess, onError);
            }

            public get = function (query: ISelect, onSuccess: Function, onError: Function) {
                new GetLogic(query, onSuccess, onError);
            }

            public createDb = function () {
                new CreateDbLogic();
            }

        }
    }
}
