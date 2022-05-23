class Pokemon < ActiveHash::Base
  self.data = [
    { id: 0, name: '---' },
    { id: 1, name: 'ポリゴン2' },
    { id: 2, name: 'コオリッポ（アイス）' },
    { id: 3, name: 'コオリッポ（ナイス）' },
    { id: 4, name: 'ドラパルト' },
    { id: 5, name: 'カイオーガ' },
    { id: 6, name: 'パルシェン' },
    { id: 7, name: 'サニゴーン' },
    { id: 8, name: 'ナマコブシ' },
    { id: 9, name: 'ミミッキュ' },
    { id: 10, name: 'カビゴン' },
    { id: 11, name: 'ガマゲロゲ' },
    { id: 12, name: 'エルフーン' }
  ]
  
  include ActiveHash::Associations
  has_many :pokemon_characteristics
  has_many :pokemon_techniques
  has_many :pokemon_types

  def characteristics
    pokemon_characteristics.map(&:characteristic)
  end

  def techniques
    pokemon_techniques.map(&:technique)
  end

  def types
    pokemon_types.map(&:type)
  end
end