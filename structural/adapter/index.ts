export type IncompatibleResponse = {
    json: object;
    txt: string;
    csv: string;
}
export const incompatibleApi = (): IncompatibleResponse => {
    // Some hidden logic
    return {
        json: { key1: 'value1', key2: 'value2'},
        txt: 'key1:value1,key2:value2',
        csv: 'key,value\r\nkey1,value1\r\nkey2,value2'
    }
}

type CompatibleDate = {
    data: Record<string, string>;
    code: 200;
}
export interface ApiAdapterI {
    getData(): CompatibleDate
}


export class ConcreteApi implements ApiAdapterI{
    constructor(private incApi: typeof incompatibleApi) {}

    getData(): CompatibleDate {
        const rawData = this.incApi();
        console.log(rawData)

        // adapt the data from JSON

        // from csv

        // Adapt data from txt to json
        const parsedTxtData = rawData.txt.split(',').reduce((acc, row) => {
            const newAcc = {...acc};
            const splitData = row.split(':')

            if (splitData.length !== 2) {
                return
            }
            // Key & value validation, skipping for simplicity

            newAcc[splitData[0]] = splitData[1]


            return newAcc;
        }, {})



        return {
            data: parsedTxtData,
            code: 200
        }
    }
}


const myApp = () => {
    console.log('>>> Start app')
    const apiAdapter = new ConcreteApi(incompatibleApi)
    const adaptedData = apiAdapter.getData()

    console.log('Adapted data >> ', adaptedData)

    console.log('>>> End app')
}

myApp();