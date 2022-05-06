class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  # POST "/login"
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user&.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to "/"
    else
      @user = User.new(username: params[:user][:username], password: params[:user][:password])
      @user.validate
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
