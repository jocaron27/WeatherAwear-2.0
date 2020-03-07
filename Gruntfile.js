module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'clean': {
            options: {},
            server: ['./dist/server/**'],
            serverSrc: ['./server/**/{*.js,*.map}']
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
            default: {
                // tsconfig: './server/tsconfig.json',
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
            express: {
                files: ['./**/*.ts'],
                tasks: ['express:dev:stop', 'ts', 'copy', 'express:dev'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('start', ['clean', 'tslint:server', 'ts', 'copy', 'express:dev', 'watch:express']);
};