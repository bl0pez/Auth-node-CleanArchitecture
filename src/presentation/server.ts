import express from 'express';

interface Options {
    port: number;
}


export class Server {

    public readonly app = express();
    private readonly port: number;

    constructor(options: Options) {
        const  { port } = options;

        this.port = port;


    }


    public async start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}