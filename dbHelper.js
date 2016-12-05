window.dbHelper = (function () {

    function TypeException(message) {
       this.message = message;
       this.name = "TypeException";
    }

    function isNumber(val){
        return typeof val === "number"
    }

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
        return localStorage[id];
    }

    return {
        "save": save,
        "get": get
    };

}());
