class PokemonsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    @user = current_user
    @pokemon = @user.pokemons.create(jsonData: params[:jsonData])

    if @pokemon
      render json: @pokemon, status: :created
    else
      render json: { message: "Something went wrong" }, status: :unprocessable_entity
    end
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    if @pokemon.update(bought: params[:bought])
      render json: @pokemon, status: :ok
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end
  
  def delete
    @pokemon = Pokemon.find(params[:id])

    if @pokemon&.destroy
      render json: {}, status: :no_content
    else
      render json: { message: "Something went wrong" }, status: :unprocessable_entity
    end
  end
end
