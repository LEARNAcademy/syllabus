class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.integer :model_year
      t.string :model
      t.integer :user_id

      t.timestamps
    end
  end
end
