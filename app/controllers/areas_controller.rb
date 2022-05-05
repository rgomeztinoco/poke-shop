class AreasController < ApplicationController
  before_action :authorized

  def show
    @id = params[:id]
  end
end
