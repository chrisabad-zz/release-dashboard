ENV["TZ"] = "Australia/Sydney"


###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

# Susy grids in Compass
# First: gem install compass-susy-plugin
# require 'susy'

# Slim templating language
require 'slim'

# Deploy to git pages
activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
helpers do
  def tick_status(feature_status, default)
    if (default == 'complete' and feature_status != 'in progress') or (default == 'in progress' and feature_status == 'complete')
      'tick--done'
    end
  end

  def item_status(feature_status, default)
    if (default == 'complete' and feature_status != 'in progress') or (default == 'in progress' and feature_status == 'complete')
      'list__item--done'
    end
  end

  # def days_left(current_release)
  #   (Date.parse(current_release.end.to_s) - DateTime.now).to_i
  # end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
