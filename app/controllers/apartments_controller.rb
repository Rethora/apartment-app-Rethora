class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    if !user_signed_in?
      return render json: {error: 'You must be logged in to create a new listing.'}, status: :unauthorized
    end
    if current_user.id != params[:apartment][:user_id]
      return render json: {error: 'You cannot create a listing for another user.'}, status: :forbidden
    end
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      return render json: apartment
    else
      return render json: apartment.errors, status: :unprocessable_entity
    end
  end

  def update
    if !user_signed_in?
      return render json: {error: 'You do not have permission to update this listing.'}, status: :unauthorized
    end

    apartment = Apartment.find(params[:id])
    if current_user.id != apartment.user_id
      return render json: {error: 'You do not have permission to update this listing.'}, status: :forbidden
    end
    apartment.update(apartment_params)
    if apartment.valid?
      return render json: apartment
    else
      return render json: apartment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if !user_signed_in?
      return render json: {error: 'You do not have permission to delete this listing.'}, status: :unauthorized 
    end

    apartment = Apartment.find(params[:id])
    if current_user.id != apartment.user_id
      return render json: {error: 'You do not have permission to delete this listing.'}, status: :forbidden
    end

    if Apartment.destroy(apartment.id)
      return render json: apartment
    else
      return render json: apartment.errors, status: :unprocessable_entity
    end
  end

  private
  def apartment_params
    params.require(:apartment).permit(
      :street,
      :city,
      :state,
      :manager,
      :email,
      :price,
      :bedrooms,
      :bathrooms,
      :pets,
      :image,
      :user_id
    )
  end
end
