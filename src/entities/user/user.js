class User {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    id;
    name;
    password;
    email;
    address;
    genre;
    constructor(id, name, password, email, address, genre) {
        this._id = id;
        this._name = name;
        this._password = password;
        this._email = email;
        this._address = address;
        this._genre = genre;
    }

    // TODO ajouter le toString
    // TODO ajouter le compare
}