class BenchesController < ApplicationController
  def index
    b_all = Bench.all
    render json: b_all
  end

  def create
    b = Bench.create(bench_params)

    if b.persisted?
      render json: b
    else
      render json: b.errors.full_messages, status: :unprocessable_entity
    end

  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lon)
  end
end
