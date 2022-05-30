class Pokemon < ActiveHash::Base
  self.data = [
    { id: 0, name: '---' },
    { id: 1, name: 'ポリゴン2', H: 85, A: 80, B: 90, C: 105, D: 95, S: 60 },
    { id: 2, name: 'コオリッポ（アイス）', H: 75, A: 80, B: 110, C: 65, D: 90, S: 50 },
    { id: 3, name: 'コオリッポ（ナイス）', H: 75, A: 80, B: 70, C: 65, D: 50, S: 130 },
    { id: 4, name: 'ドラパルト', H: 88, A: 120, B: 75, C: 100, D: 75, S: 142 },
    { id: 5, name: 'カイオーガ', H: 100, A: 100, B: 90, C: 150, D: 140, S: 90 },
    { id: 6, name: 'パルシェン', H: 50, A: 95, B: 180, C: 85, D: 45, S: 70 },
    { id: 7, name: 'サニゴーン', H: 60, A: 95, B: 50, C: 145, D: 130, S: 30 },
    { id: 8, name: 'ナマコブシ', H: 55, A: 60, B: 130, C: 30, D: 130, S: 5 },
    { id: 9, name: 'ミミッキュ', H: 55, A: 90, B: 80, C: 50, D: 105, S: 96 },
    { id: 10, name: 'カビゴン', H: 160, A: 110, B: 65, C: 65, D: 110, S: 30 },
    { id: 11, name: 'ガマゲロゲ', H: 105, A: 95, B: 75, C: 85, D: 75, S: 74 },
    { id: 12, name: 'エルフーン', H: 60, A: 67, B: 85, C: 77, D: 75, S: 116 }
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