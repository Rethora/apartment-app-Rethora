class RegistrationsController < Devise::RegistrationsController
  def create
    user = User.create(user_params)
    if user.valid?
      sign_in user
      redirect_to '/'
    else
      redirect_to '/users/sign_up'
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :email, 
      :first_name, 
      :last_name, 
      :password, 
      :password_confirmation
    )
  end
end 
