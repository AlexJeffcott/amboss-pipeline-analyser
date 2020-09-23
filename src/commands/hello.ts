import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import axios from 'axios'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$analyse-pipeline hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
    ...cli.table.flags(),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Hello)
    const {data} = await axios.get('https://jenkins.miamed.de/job/AMBOSS/job/ui-amboss/job/master/wfapi/runs?since=%231679&fullStages=true&_=1600845364619', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-GB,en;q=0.9,de;q=0.8,it;q=0.7',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest',
        cookie: 'JSESSIONID.a5211607=node03v9vv7vuzqin11xe36aezlg4k110004.node0; JSESSIONID.089a7cec=node0noqy05mys6om198uuwgbx16b11575.node0; screenResolution=1680x1050; JSESSIONID.06039018=node056ar61tuwt20dxjbydqrobm24487.node0; JSESSIONID.f0028a75=node01iz66nmmcxe632olcm974u64n2126.node0; JSESSIONID.2d670161=node07ykneou522td1n6h936rkb3d91804.node0; JSESSIONID.a4caa772=node014vubra17adus1244t1iw13wjc410.node0; jenkins-timestamper-offset=-7200000; JSESSIONID.a4401c0f=node01rcjtzy7iwvdb5ivdoubdwiv77.node0; JSESSIONID.9edace53=node0112s9qjmfwlct1lktjrtea0ldo9221.node0; iconSize=16x16; JSESSIONID.e7dffe65=node0rjz36ticgv4j1kp05wntebwv619543.node0; JSESSIONID.3be6f429=node0tbeay7yt03mvwewghhv0zajs76461.node0; JSESSIONID.00e9e5bb=node01vl88fa2bkjpscxu1mb7yrgks11205.node0',
      }})

    cli.table(data, {
      name: {
        get: row => row.name,
      },
      status: {
        get: row => row.status,
        extended: true,
      },
      durationSecs: {
        get: row => Math.round(row.durationMillis/1000),
        extended: true,
      },
      e2eStage: {
        get: row => `${row.stages[13].status} in ${Math.round(row.stages[13].durationMillis/1000)} secs`,
        extended: true,
      },
    }, {
      printLine: this.log,
      ...flags,
    })

    // const name = flags.name ?? 'world'
    // // this.log(`hello ${name} from ./src/commands/hello.ts`)
    // process.stdout.write(`hello ${name}`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
