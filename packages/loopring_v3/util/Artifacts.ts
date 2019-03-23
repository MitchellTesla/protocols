
export class Artifacts {
  public Exchange: any;
  public ExchangeHelper: any;
  public TokenRegistry: any;
  public OperatorRegistry: any;
  public BlockVerifier: any;
  public DummyToken: any;
  public LRCToken: any;
  public GTOToken: any;
  public RDNToken: any;
  public REPToken: any;
  public WETHToken: any;
  public INDAToken: any;
  public INDBToken: any;
  public TESTToken: any;
  constructor(artifacts: any) {
    this.Exchange = artifacts.require("impl/Exchange");
    this.ExchangeHelper = artifacts.require("impl/ExchangeHelper");
    this.TokenRegistry = artifacts.require("impl/TokenRegistry");
    this.OperatorRegistry = artifacts.require("impl/OperatorRegistry");
    this.BlockVerifier = artifacts.require("impl/BlockVerifier");
    this.DummyToken = artifacts.require("test/DummyToken");
    this.LRCToken = artifacts.require("test/tokens/LRC");
    this.GTOToken = artifacts.require("test/tokens/GTO");
    this.RDNToken = artifacts.require("test/tokens/RDN");
    this.REPToken = artifacts.require("test/tokens/REP");
    this.WETHToken = artifacts.require("test/tokens/WETH");
    this.INDAToken = artifacts.require("test/tokens/INDA");
    this.INDBToken = artifacts.require("test/tokens/INDB");
    this.TESTToken = artifacts.require("test/tokens/TEST");
  }
}