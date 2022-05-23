class Kind < ActiveHash::Base
  self.data = [
    { id: 0, name: '---' },
    { id: 1, name: 'ぶつり' },
    { id: 2, name: 'とくしゅ' }
    
  ]

  include ActiveHash::Associations
  has_many :techniques

  def call_techniques
    techniques.map{|item| item}
  end

  
end