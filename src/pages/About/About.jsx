import React from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const About = () => {

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-center">
                        About Delicious World
                    </h2>
                    <p className="mt-5 text-xl text-gray-500 sm:text-center">
                        Delicious World is a Japanese food website that celebrates the art and culture of Japanese cuisine. Our website offers a wide range of authentic Japanese recipes, cooking tips, and cultural insights to help you explore the delicious world of Japanese food.
                    </p>
                </div>
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Our Story
                    </h2>
                    <p className="mt-5 text-lg text-gray-500">
                        As the sun began to set on the quiet town of Matsuri, a young chef named Yuki stepped out of her restaurant and looked up at the sky. She had just served the last customers of the day, and she was exhausted but happy. Her passion for cooking had led her to open her own restaurant, and she was grateful for every moment she spent doing what she loved.

                        But as she looked around at the empty streets, Yuki realized that something was missing. She had always dreamed of sharing her love of Japanese cuisine with the world, but she felt like her small restaurant was just a drop in the bucket. How could she make a real impact?

                        The answer came to her in a flash. She would start a food blog, dedicated to showcasing the beauty and diversity of Japanese cuisine. She could share her favorite recipes, cooking tips, and cultural insights with people all over the world, and hopefully inspire others to explore the wonders of Japanese food.

                        Excited by the possibilities, Yuki rushed back inside and began typing furiously. She wrote about her favorite ingredients, the history of her favorite dishes, and the techniques that she had learned from her grandmother. Before she knew it, the sun had risen, and she had written dozens of posts.

                        As she hit "publish" on her first post, Yuki felt a sense of nervousness and excitement. Would anyone read her blog? Would anyone care about what she had to say? But as the days went by, the comments and likes began to pour in, and Yuki realized that she had struck a chord with people around the world.

                        Over the months and years that followed, Yuki's blog grew in popularity, and she became a respected voice in the global food community. She was invited to speak at conferences and festivals, and she even published a cookbook. But through it all, she remained true to her passion for Japanese cuisine, and she continued to share her love and knowledge with anyone who would listen.

                        And so, in the quiet town of Matsuri, Yuki's legacy lived on, as people all over the world discovered the beauty and richness of Japanese food, thanks to her dedication and hard work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;