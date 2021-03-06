import os
import yaml

deploy_config = {
    "dev": {
        "mumbai": {
            "objectOwnership": {
                "address": "0x7cD44a3C9696185BAC374F0Cd3018F4b24986cb0",
            },
            "apostle": {
                "address": "0x6c74a72444048A8588dEBeb749Ee60DB842aD90f"
            },
            "equipment": {
                "address": "0x366694a6Af1C3aBe3AFedC24771BF3DdB0f9292E"
            },
            "SUBGRAPH_NAME": "perrorone/nftself",
        }
    },
    "production":{
        "matic": {
            "objectOwnership": {
                "address": "0x41F4845d0ed269f6205D4542A5165255a9D6E8Cf",
            },
            "apostle": {
                "address": "0x58dff37A4682321650102DBa6D0B547BB647B798"
            },
            "equipment": {
                "address": "0x444E4319dC2Db7E030A641682459044DD3D83D76"
            },
            "SUBGRAPH_NAME": "perrorone/nftself",
        }
    }
}
def is_production():
    return os.getenv("DEPLOY_MODE") == "production"

config =  deploy_config["production"] if is_production() else deploy_config["dev"]

subgraph_config = yaml.load(open("./subgraph.yaml", "r").read())
print(subgraph_config)
for chain, conf in config.items():
    for index, data_sources in enumerate(subgraph_config["dataSources"]):
        if data_sources["name"] in conf:
            subgraph_config["dataSources"][index]["source"]["address"] = conf[data_sources["name"]]["address"]
            subgraph_config["dataSources"][index]["network"] = chain
    with open("./subgraph.yaml", "w", encoding="utf-8") as f:
        f.write(yaml.dump(subgraph_config))
    os.system("graph codegen && graph build")
    os.system("graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ {}".format(conf["SUBGRAPH_NAME"]))