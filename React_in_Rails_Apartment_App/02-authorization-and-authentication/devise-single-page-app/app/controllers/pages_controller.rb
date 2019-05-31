class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected

  def unprotected
  end

  def protected
  end
end
