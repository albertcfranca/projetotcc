import express from 'express';

class app{
    constructor(){
        this.server = express();
    }
}

export default new app().server;
