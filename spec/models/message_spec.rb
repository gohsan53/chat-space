require 'rails_helper'
describe Message do
  describe '#create' do
    # 1.メッセージがあれば保存できること
    it "is valid with a message" do
      message = build(:message)
      expect(message).to be_valid
    end
    # 2.画像があれば保存できること
  end
end