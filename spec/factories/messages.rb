FactoryBot.define do
  
  factory :message do
    text    {'test'}
    image   {File.open("#{Rails.root}/public/images/test.jpg")}
    user
    group
  end

end