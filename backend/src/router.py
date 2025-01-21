from fastapi import APIRouter

from src.init import cmc_client


router = APIRouter(
    prefix="/cryptocurrencies"
)


@router.get("")
async def get_listings():
    return await cmc_client.get_listings()


@router.get("/{id}")
async def get_coin(id: int):
    return await cmc_client.get_coin(id)
