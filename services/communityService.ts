/* 커뮤니티 DB 관련 작업 서비스 */
import mongoose, {Schema} from "mongoose";
import { createUuidV4 } from "../src/lib/common";

const {Post, Comment} = require('../src/database/schema/CommunitySchema');

/** select all posts */
export const getAllPosts = async (): Promise<any> => {
    try {
        return await Post.find({});
    } catch (error: unknown) {
        throw error;
    }
}

/** edit specific post */
export const editPost = async (): Promise<any> => {
    try {
        
    } catch (error: unknown) {
        
    }
}

/** delete all posts */
export const deleteAllPosts = async (): Promise<void> => {
    let result:boolean = false;
    try {
        await Post.deleteMany({}).then(() => {
            result = true;
        });
    } catch (error: unknown) {
        if(error instanceof Error) console.log(error.message);
        result = false;
    }
    if(result) console.log('delete all posts');
}

export const init = async ():Promise<void> => {
    const comment1 = new Comment({
        writer: 'cherry',
        date: new Date(),
        content: '좋은 글 감사합니다! 나중에 꼭 테슬라 타고 말거에요><',
    });
    const comment2 = new Comment({
        writer: 'sangwoo',
        date: new Date(),
        content: `A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls 
        like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, 
        that I neglect my talents.`
    })
    const post1 = new Post({
        title: 'Policies to promote electric vehicle deployment',
        date: new Date(),
        writer: 'iea.org',
        content: `Ten million electric cars were on the world’s roads in 2020. It was a pivotal year for the electrification of mass market transportation. Sales of electric cars were 4.6% of total car sales around the world. The availability of electric vehicle models expanded. New initiatives for critical battery technology were launched. And, this progress advanced in the midst of the Covid-19 pandemic and its related economic downturn and lockdowns.

        Over the last decade a variety of support policies for electric vehicles (EVs) were instituted in key markets which helped stimulate a major expansion of electric car models. 
        
        But the challenge remains enormous. Reaching a trajectory consistent with the IEA Sustainable Development Scenario will require putting 230 million EVs on the world’s roads by 2030.
        
        For EVs to unleash their full potential to combat climate change, the 2020s will need to be the decade of mass adoption of electric light-duty vehicles. In addition, specific policy support and model expansion for the medium- and heavy-duty vehicle segments will be crucial to mitigate emissions and make progress toward climate goals.
        
        Main policy drivers of EV adoption to date
        
        Significant fiscal incentives spurred the initial uptake of electric light-duty vehicles (LDVs) and underpinned the scale up in EV manufacturing and battery industries. The measures – primarily purchase subsidies, and/or vehicle purchase and registration tax rebates – were designed to reduce the price gap with conventional vehicles. Such measures were implemented as early as the 1990s in Norway,1 in the United States in 2008 and in China in 2014.
        
        Gradual tightening of fuel economy and tailpipe CO2 standards has augmented the role of EVs to meet the standards. Today, over 85% of car sales worldwide are subject to such standards. CO2 emissions standards in the European Union played a significant role in promoting electric car sales, which in 2020 had the largest annual increase to reach 2.1 million. Some jurisdictions are employing mandatory targets for EV sales, for example for decades in California2 and in China since 2017.
        
        Convenient and affordable publicly accessible chargers will be increasingly important as EVs scale up. To help address this, governments have provided support for EV charging infrastructure through measures such as direct investment to install publicly accessible chargers or incentives for EV owners to install charging points at home. In some places building codes may require new construction or substantial remodels to include charging points, for example in apartment blocks and retail establishments.
        
        Efforts by cities to offer enhanced value for EVs has encouraged sales even outside of urban areas. Such measures include strategic deployment of charging infrastructure, and putting in place preferential/prohibited circulation or access schemes such as low- and zero-emission zones or differentiated circulation fees. Such measures have had a major impact on EV sales in Oslo and a number of cities in China.
        
        Broader and more ambitious policy portfolios to accelerate the transition
        
        Making the 2020s the decade of transition to EVs requires more ambition and action among both market leaders and followers. In markets that demonstrated significant progress in the 2010s, a primary direction in 2021 and beyond should be to continue to implement and tighten, as well as to broaden, regulatory instruments. Examples include the European Union CO2 emissions regulation for cars and vans, China’s New Energy Vehicles (NEV) mandate or California’s Zero-Emission Vehicle (ZEV) mandate.
        
        Near-term efforts must focus on continuing to make EVs competitive and gradually phasing out purchase subsidies as sales expand. This can be done via differentiated taxation of vehicles and fuels, based on their environmental performance, and by reinforcing regulatory measures that will enable the clean vehicle industry to thrive.
        
        In the long term, realising the full potential for EVs to contribute to cut vehicle emissions requires integration of EVs in power systems, decarbonisation of electricity generation, deployment of recharging infrastructure and manufacturing of sustainable batteries.
        
        Countries that currently deploy limited numbers of electric cars can profit from the lessons learned and advances already made in automotive and battery technology to support the production and uptake of EVs. Product innovation and the expertise developed in the charging services industry will also be beneficial for emerging economies. But they will also need to significantly tighten fuel economy and emissions standards. Emerging economies with large markets for second-hand imported cars can use policy levers to take advantage of electric car models at attractive prices, though they will need to place particular emphasis on implications for electricity grids.#anchor3## 4
        
        To date, more than 20 countries have announced the full phase-out of internal combustion engine (ICE) car sales over the next 10‑30 years, including emerging economies such as Cabo Verde, Costa Rica and Sri Lanka. Moreover, more than 120 countries (accounting for around 85% of the global road vehicle fleet, excluding two/three-wheelers) have announced economy-wide net-zero emissions pledges that aim to reach net zero in the coming few decades.
        
        Policy attention and actions need to broaden to other transport modes, in particular commercial vehicles – light-commercial vehicles, medium- and heavy-duty trucks, and buses – as they have an increasing and disproportionate impact on energy use, air pollution and CO2 emissions. Medium- and heavy‑duty vehicles represent 5% of all four-wheeled road vehicles in circulation but almost 30% of CO2 emissions. Progress in batteries has led to rapid commercialisation in the past few years of more and more models in ever heavier weight segments and with increasing ranges.
        
        In 2020, California was the first to propose a ZEV sales requirement for heavy-duty trucks. The Advanced Clean Truck Regulation is due to take effect from 2024. The Netherlands and a number of other countries are implementing zero-emission commercial vehicle zones and pioneering deployment efforts. Although this is a “hard-to-abate” sector and there are competing decarbonisation pathways (including hydrogen and biofuels), the electrification of medium- and heavy-duty vehicles is increasingly recognised as a promising pathway to reduce both local pollutant and CO2 emissions. Electrification of HDVs requires policy support and commercial deployment similar to that which passenger cars enjoyed in the 2010s. Electric buses are already making a dent in key cities around the world, supported by national and local policies that target air pollution. Policy measures to promote electric buses are diverse; they may include competitive tenders, green public procurement programmes, purchase subsidies and direct support to charging infrastructure deployment, as well as effective pollutant emissions standards.
        
        Given their enormous number and populartity, electrifying two/three-wheelers in emerging economies is central to decarbonising transport in the near term. China is taking a lead with a ban of ICE versions of two/three-wheelers in a number of cities.`,
        likes: 3,
        //comments: [comment1, comment2]
    });

    post1.comments.push(comment1);
    post1.comments.push(comment2);

    await Post.create(post1).then(() => console.log('[init] insert complete!'));
}