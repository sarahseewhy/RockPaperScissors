require 'sinatra'
require 'sinatra/partial'

set :partial_template_engine, :erb
# set :public_folder, File.join(File.dirname(__FILE__), '..', "public")
# use Rack::Flash


get '/' do
	erb :index
end