import os
import discord
from dotenv import load_dotenv
import time
from pypresence import Presence

load_dotenv()
TOKEN = os.getenv('TOKEN')

if TOKEN is None:
    raise ValueError("No TOKEN found in environment variables")

client = discord.Client()

@client.event
async def on_ready():
    print(f'I have been logged in as {client.user}')
    
    RPC = Presence("1017617990331666442")  # Client ID
    RPC.connect()
    
    RPC.update(
        state="Inactive",
        details="</>",
        large_image="off",
        start=time.time(),
        buttons=[{"label": "Watch Stream", "url": "https://www.twitch.tv/syahrills"}]
    )

client.run(TOKEN)
