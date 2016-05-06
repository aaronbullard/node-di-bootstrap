module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Application Environment
  |--------------------------------------------------------------------------
  |
  | This value determines the "environment" your application is currently
  | running in. This may determine how you prefer to configure various
  | services your application utilizes. Set this in your ".env" file.
  |
  */
  env: env('APP_ENV', 'production'),

  /*
  |--------------------------------------------------------------------------
  | Application Debug Mode
  |--------------------------------------------------------------------------
  |
  | When your application is in debug mode, detailed error messages with
  | stack traces will be shown on every error that occurs within your
  | application. If disabled, a simple generic error page is shown.
  |
  */
  debug: env('DEBUG', false),


  /*
  |--------------------------------------------------------------------------
  | Capture Versions
  |--------------------------------------------------------------------------
  |
  | When capture versions is on, every resource instance will have every
  | change tracked as a json patch under the events index and patches type.
  | Patches can retrieved and all versions of a resource record can be
  | retrieved.
  |
  */
  capture_versions: env('CAPTURE_VERSIONS', false),


  /*
  |--------------------------------------------------------------------------
  | Database Connections
  |--------------------------------------------------------------------------
  |
  | Here are each of the database connections setup for your application.
  | Of course, an example of configuring an elastic search database platform
  | is shown below to make development simple.
  |
  */
  connections: {

    mysql: {
        driver: 'mysql',
        host: env('DB_HOST', 'localhost'),
        database: env('DB_DATABASE', 'mydatabase'),
        username: env('DB_USERNAME', 'root'),
        password: env('DB_PASSWORD', null),
        charset: 'utf8',
        collation: 'utf8_unicode_ci',
        prefix: '',
        strict: false,
        engine: null
    },

    elastic: {
      host: env('ELASTIC_HOST', 'localhost:9200'),
      log: [{
        type: 'stdio',
        levels: ['error', 'warning']
      }]
    }

  },


  /*
  |--------------------------------------------------------------------------
  | Autoloaded Service Providers
  |--------------------------------------------------------------------------
  |
  | The Service Providers listed here will be automatically loaded on the
  | request to your application. Feel free to add your own services to
  | this array to grant expanded functionality to your applications.
  |
  | Each Service Provider must implement ServiceProvider::register method and
  | is registered when the application container is bootstrapped.
  |
  | Optionally, ServiceProvider::boot can load services the moment before the
  | Node Express app is launched.  This is where routes should be registered.
  |
  */
  service_providers: [
    src() + '/Providers/AppServiceProvider.js',
    src() + '/Providers/EventServiceProvider.js'
  ]

}
