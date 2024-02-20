const { writeFile , readdirSync, statSync } = require('fs');
const JSZip =require('jszip')
const fs =require('fs').promises;
const path= require('path');
const createZip =async ()=>{

    const myZip = new JSZip()

    try{
        const data = `My name is Lovepreet, and I hail form a small village nested amidst the lush green fields of Patiala (Punjab), India. From a young age I have always loved cricket and music. I like to sing and dance to the gracefully Indian songs. I have always found a consoling harmony in music and playing cricket.
    As the eldest sibling in my family, I have always been a role model to be looked up to which means failure is not an option. I have always struggled with my studies due this pressure and sometimes the financial back rush of my family. Yet, amidst the adversities, my spirit remains strong, fueled by the urge to get knowledgeable. I am always in a relentless race to pursue my dreams.
    I always had a dream of moving to Canada. My family and especially my parents were strongly against it since it would mean stretching even thinner into their pockets to try and raise money for the relocation. The y argued that we were better off in our own country, nearer to our relatives where we would assure of help in case of amity. I had no hope of achieving my dream since there was no other way. However, kept head up and always focused on my studies.
    In the midst of adversity, a glimmer of hope emerged in the form of a scholarship opportunity at a college in Canada. With bated breath and a heart brimming with anticipation, I poured my soul into the application, weaving the tapestry of my struggles and aspirations into words that echoed the resilience of my spirit.
    My parents with no other excuse to pose agreed to the relocation plan which would mark the beginning of new dawn. My heart was filled with joy and anticipation. I was awarded a scholarship to Niagara College Toronto. Coming to Canada posed as struggle as I adopted to the countries weather and climate which was pretty different from back home. I found it hard to settle and get used to the time difference too.
    As I stand today, on the edge of a new age, I am reminded of the words of Helen Keller, who once said, "Although the world is full of suffering, it is also full of the overcoming of it." My journey, marked by hardships and triumphs, bears testament to the indomitable human spirit that refuses to be vanquished by the storms of life.
    In the words of Nelson Mandela, "Education is the most powerful weapon which you can use to change the world." Armed with the power of knowledge and fortified by the strength of my convictions, I am poised to embark on a journey of transformation, determined to defy the odds and carve a future filled with promise and possibility.
    I will do my best to make my parents proud and lead my siblings in the right path. Most of all I cannot disappoint myself since it has been a journey of a thousand miles and I have just gotten started. I will be sure to make it a life achievement and succeed in my studies.
    And as I look back on the hard path that led me here, I am reminded of the words of once bright schooler Rabindranath Tagore, who once altered, “Faith is the bird that feels the light when the dawn is still dark.” I the darkest of nights, in the trials and tribulations, it was faith – in myself, in my dreams, and in my parents and all the resilience that illuminated my path and led me towards my destiny.
     ${Date()}`;
    
        await fs.writeFile(path.join(__dirname, 'text1.txt'), data, 'utf8', (err) => {
        if (err) throw err;
        console.log('Data has been written to the file.');
    });
    
    const files = readdirSync(__dirname);
        for (const file of files) {
            const filePath = path.join(__dirname, file);
            const stats = statSync(filePath);
            if (stats.isFile()) {
                const fileData = await fs.readFile(filePath);
                myZip.file(file, fileData);
            }
        }

        const zipData = await myZip.generateAsync({ type: 'nodebuffer' });
        await fs.writeFile('myZip.zip', zipData);
        console.log('myZip.zip written.');
    } catch (e) {
        console.log(`Error occurred while creating zip: ${e}`);
    } 
    
}
(async () => {
    await writeFile
    await createZip();
})();