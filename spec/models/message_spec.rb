require 'rails_helper'

describe Message do
  describe '#create' do
    context 'can save' do
      # 1.メッセージがあれば保存できること
      it "is valid with a message" do
        message = build(:message, image: nil)
        expect(message).to be_valid
      end
      # 2.画像があれば保存できること
      it "is valid with a image" do
        message = build(:message, text: nil)
      end
      # 3.メッセージと画像があれば保存できること
      it "is valid with both a message and a image" do
        message = build(:message)
        expect(message).to be_valid
      end
    end
    context 'can not save' do
      #4.メッセージも画像も無いと保存できないこと
      it "is invalid without neither a message nor a image" do
        message = build(:message, text: nil, image: nil)
        message.valid?
        expect(message.errors[:text]).to include("を入力してください")
      end
      #5.group_idがないと保存できないこと
      it "is invalid without a group_id" do
        message = build(:message, group: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end
      #6.user_idがないと保存できないこと
      it "is invalid without a user_id" do
        message = build(:message, user: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end