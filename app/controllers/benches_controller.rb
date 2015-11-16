class BenchesController < ApplicationController
  def index
    b_all = Bench.all_in_rectangle(params[:north],params[:south],params[:east],params[:west])
    render json: b_all
  end

  def create

    puts params
    b = Bench.create(bench_params)

    if b.persisted?
      render json: b
    else
      render json: b.errors.full_messages, status: :unprocessable_entity
    end

  end

  def bench_params
    params.require(:bench).permit(:description, :capacity, :lat, :lon)
  end
end
