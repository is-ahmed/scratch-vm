const formatMessage = require("format-message");

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const MathUtil = require('../../util/math-util');
const Clone = require('../../util/clone');
const log = require('../../util/log');
const fetchWithTimeout = require('../../util/fetch-with-timeout');


const blockIconURL = 'https://icon-library.com/images/execute-icon/execute-icon-21.jpg'  
const menuIconURL = 'https://icon-library.com/images/execute-icon/execute-icon-21.jpg'

/**
 * Class for the javascript blocks
 * @constructor
 */
class Scratch3JavascriptBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiatign this block package
         * @type {Runtime}
         */
        this.runtime = runtime;
    }



    /**
     * Convert the provided text into runnable javascript 
     * @param {object} args Block arguments
     */
    runAndWait (args) {
        let code = Cast.toString(args.CODE);
        eval(code); 
    }

    /**
     * Convert the provided text into runnable javascript 
     * @param {object} args Block arguments 
     */
    ifAndThen(args) {

        let condition = Cast.toString(args.CONDITION);
        let code = Cast.toString(args.CODE);
        
        
    }

    /**
     * @returns {object} metadata for this extension
     * and its blocks
     */
    getInfo () {
        return {
            id: 'javascript',
            name: formatMessage({
                id: 'javascript.categoryName',
                default: 'Javascript',
                description: 'Name of the Javascript extension'
            }), 
            blockIconURL: blockIconURL,
            menuIconURL: menuIconURL,
            blocks: [
                {
                    opcode: 'runAndWait',
                    text: 'run [CODE]', 
                    blockType: BlockType.COMMAND,
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'console.log("Hello World");'
                        }
                    }
                },
                {
                    opcode: 'ifAndThen',
                    text: 'if [CONDITION] then [CODE]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        CONDITION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello'
                        },

                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'let z=1;'
                        }
                    }
                },
                {
                    opcode: 'whileAndDo',
                    text: 'while [CONDITION] do [CODE]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        CONDITION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'y == 1;'
                        },

                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'let z=1;'
                        }
                    }
                }
            ],
            menus: {}
        }
    }
}
module.exports = Scratch3JavascriptBlocks