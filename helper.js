window.helper = (function () {

    function TypeException(message) {
       this.message = message;
       this.name = "TypeException";
    }

    function isNumber(val){
        return typeof val === "number";
    }

    db = (function () {

        function save(id, array) {
            if (!isNumber(id)) {
                throw new TypeException("Primeiro parâmetro precisa ser um número");
            }
            if (!Array.isArray(array)) {
                throw new TypeException("Segundo parâmetro precisa ser um Array");
            }
            localStorage.setItem(id, JSON.stringify(array));
        }

        function get(id) {
            if (!isNumber(id)) {
                throw new TypeException("Primeiro parâmetro precisa ser um número");
            }
            return JSON.parse(localStorage[id]);
        }

        return {
            "save": save,
            "get": get
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
