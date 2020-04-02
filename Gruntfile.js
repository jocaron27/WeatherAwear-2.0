const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'clean': {
            options: {},
            dist: ['./dist/server/**'],
            server: ['./server/**/{*.js,*.map}'],
            client: ['./src/**/{*.js,*.map}']
        },
        'copy': {
            server: {
                files: [{
                    expand: true,
                    cwd: './server',
                    src: [
                        '**',
                        '!**/tsconfig.json',
                        '!**/*.{ts,map}'
                    ],
                    dest: './dist/server/'
                }]
            }
        },
        'express': {
            options: {
                debug: true,
            },
            dev: {
                options: {
                    script: './dist/server/index.js',
                    debug: true,
                    // node_env: 'development'
                }
            }
        },
        'ts': {
            server: {
                src: [
                    './server/**/*.ts',
                    '!./server/**/*.d.ts',
                    '!./server/**/*.spec.ts',
                    '!node_modules/**/*.ts',
                    '!node_modules/**/*.d.ts',
                    '!node_modules/@types/**/*.d.ts'
                ],
                options: {
                    fast: 'never',
                    verbose: true,
                    downlevelIteration: true,
                    compiler: './node_modules/typescript/bin/tsc'
                }
            },
            client: {
                src: [
                    './src/**/*.ts',
                    './src/**/*.tsx',
                    '!./server/**/*.d.ts',
                    '!./server/**/*.test.tsx',
                ],
                options: {
                    fast: 'never',
                    downlevelIteration: true,
                    compiler: './node_modules/typescript/bin/tsc',
                    jsx: 'react',
                    allowSyntheticDefaultImports: true,
                    esModuleInterop: true
                }
            }
        },
        'tslint': {
            options: {
                configuration: grunt.file.readJSON('tslint.json')
            },
            server: {
                src: ['./server/*/**.ts', '!node_modules/**/*.ts']
            }
        },
        'watch': {
            options: {
                spawn: false
            },
            server: {
                files: ['./server/**/*.ts'],
                tasks: ['express:dev:stop', 'ts:server', 'copy', 'express:dev'],
            },
            client: {
                files: ['./src/**/*.ts', './src/**/*.tsx'],
                tasks: ['ts:client', 'webpack'],
            }
        },
        'webpack': {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig,
            dev: Object.assign({}, webpackConfig)
        }
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('ts-client', ['clean:client', 'ts:client']);
    grunt.registerTask('start', ['clean:dist', 'tslint:server', 'ts:server', 'copy', 'ts-client', 'webpack', 'express:dev', 'watch']);
};