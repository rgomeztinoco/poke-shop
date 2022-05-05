class UsersController < ApplicationController
  before_action :authorized, only: %i[show]
end
