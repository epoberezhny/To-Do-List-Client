require 'rack'
require 'rack/ssl'

use Rack::SSL
use Rack::Static, urls: %w[/css /js /images /fonts], root: 'dist', gzip: true

run proc { Rack::Response.new File.read('dist/index.html') }
