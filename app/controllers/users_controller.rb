class UsersController < ApplicationController
  before_action :authorized, only: %i[show cart]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to login_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @user = current_user
    @pokemons = @current_user.pokemons.filter(&:bought?)
  end

  def cart
    @user = current_user
    @pokemons = @current_user.pokemons.reject(&:bought?)
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
