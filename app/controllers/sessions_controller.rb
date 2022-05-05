class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  # POST "/sessions"
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user&.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to "/"
    else
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
