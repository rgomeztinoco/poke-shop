class UsersController < ApplicationController
  before_action :authorized, only: %i[show]

  def new
    @user = User.new
  end

  def create; end

  def show; end
end
