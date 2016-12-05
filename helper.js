window.helper = (function () {

    function TypeException(message) {
       this.message = message;
       this.name = "TypeException";
    }

    function NotFoundException(message) {
       this.message = message;
       this.name = "TypeException";
    }

    function isNumber(val){
        return typeof val === "number";
    }

    function isObject(object) {
        return object instanceof Object
    }

    var db = (function () {

        function save(obj) {
            var db = JSON.parse(localStorage.db || "[]");

            if (!isObject(obj)) {
                throw new TypeException("Segundo parâmetro precisa ser um Objeto");
            }

            db.push(obj);

            localStorage.setItem('db', JSON.stringify(db));
        }

        function get(id) {
            if (!isNumber(id)) {
                throw new TypeException("Primeiro parâmetro precisa ser um número.");
            }
            var dice = JSON.parse(localStorage.db)[id]
            if (!dice) {
                throw new NotFoundException("Esse registro não pode ser encontrado.");
            }
            return ;
        }

        function getAll() {
            var db = JSON.parse(localStorage.db || "[]");
            return db;
        }

        function autoIncrements() {
            return Object.keys(getAll()).length + 1;
        }

        return {
            "save": save,
            "get": get,
            "getAll": getAll
        };
    }());

    return {
        "db": db,
        random: function(min, max) {
            if (!isNumber(min) || !isNumber(max)) {
                throw new TypeException("Os parametros precisam ser números.");
            }

            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

}());
