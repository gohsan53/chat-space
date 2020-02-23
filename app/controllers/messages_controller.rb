class MessagesController < ApplicationController
  def index

  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :index
    else
      render :index
    end
  end

  private
  def message_params
    params.require(:message).permit(:text, :image)
  end
end
