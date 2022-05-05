class LocationsController < ApplicationController
  before_action :authorized

  def index; end

  def show
    @id = params[:id]
  end
end
