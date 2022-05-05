class CreatePokemons < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemons do |t|
      t.string :jsonData
      t.boolean :bought
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
