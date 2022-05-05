class AreasController < ApplicationController
  before_action :authorized

  def show
    @user = current_user
    @id = params[:id]
  end
end
