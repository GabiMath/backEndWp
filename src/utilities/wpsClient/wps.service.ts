const { Client } = require('whatsapp-web.js');

export class GlobalService {

    static client = new Client({});

    static qr: String;

    static status: string = 'logout';

    static sent: number = 0;

    static error: Array<any> = [];




}