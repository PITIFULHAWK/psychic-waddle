import React from "react";
import { Award, Users, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhatMakesUsSpecial = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes Us Special?
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            The belief that we grow with our clients is ingrained in our
            Phynovate and that's something that sets us apart. We work as
            partners with our clients and take care of their needs allowing the
            leadership team to focus on what matters the most – Growth!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-50">
              <CardHeader>
                <Award className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-semibold">
                  Expertise and Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We have built a team that not only has the qualifications but
                  also the depth and width of expertise to ensure that we cover
                  everything comprehensively and in the right way.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-semibold">
                  Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are in this for the long run. The engagement is as partners
                  and not as a service provider. Our client retention rate
                  speaks for itself.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50">
              <CardHeader>
                <Heart className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl font-semibold">
                  Valued Relationships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We value the relationship and trust we share with our clients.
                  Our commitment to fostering strong, lasting connections is at
                  the core of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatMakesUsSpecial;
