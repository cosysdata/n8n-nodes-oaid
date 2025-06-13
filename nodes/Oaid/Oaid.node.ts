import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class Oaid implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Oaid',
        name: 'oaid',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Oaid API',
        defaults: {
            name: 'Oaid',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'oaidApi',
                required: false,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://api.oaid.at/v2/isp',
        },
        properties: properties,
    };
}
