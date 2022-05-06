class ApplicationController < ActionController::Base
  include ActionController::HttpAuthentication::Token::ControllerMethods

  helper_method :logged_in?, :current_user

  def require_login!
    current_user || render_unauthorized("Access denied")
  end

  def current_user
    @current_user ||= if session[:user_id]
                        User.find(session[:user_id])
                      else
                        authenticate_token
                      end
  end

  def render_unauthorized(error_message)
    render json: { errors: error_message }, status: :unauthorized
  end

  def logged_in?
    !!current_user
  end

  def authorized
    redirect_to login_path unless logged_in?
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, _options|
      User.where(token: token).first
    end
  end
end
